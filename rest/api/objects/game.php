<?php

    require_once "./core/database.php";
    require_once "./objects/user.php";

    class Game {
                
        private static $connection = null;
        private static $tablename = 'games';

        public static function Init() {
            self::$connection = Database::getConnection();
        }

        public static function getGameById($gid) {
            $user = new User($GLOBALS["username"]);
            $uid = $user->getUid();
            $query = "
            SELECT 
                g.gid,
                g.name,
                u1.username AS Creator,
                u2.username AS PlayerTwo,
                u3.username AS PlayerThree,
                u4.username AS PlayerFour,
                created
            FROM
                users u1,
                users u2,
                users u3,
                users u4,
                games g
            WHERE
                g.gid = ?
                    AND u1.uid = g.playerOne
                    AND u2.uid = g.playerTwo
                    AND u3.uid = g.playerThree
                    AND u4.uid = g.playerFour
                    AND (g.playerOne = ? OR g.playerTwo = ?
                    OR g.playerThree = ?
                    OR g.playerFour = ?)                    
            ORDER BY g.created DESC";
            $stmt = self::$connection->prepare($query);
            $stmt->bind_param("iiiii", $gid, $uid, $uid, $uid, $uid);
            $stmt->execute();
            $res = $stmt->get_result();
            echo json_encode($res->fetch_all(MYSQLI_ASSOC));               
        }

        public static function getGamesByUserId() {
            $user = new User($GLOBALS["username"]);
            $uid = $user->getUid();
            $query = "
            SELECT g.gid, g.name, u1.username as Creator, u2.username as PlayerTwo, u3.username as PlayerThree, u4.username as PlayerFour, created
                FROM users u1, users u2, users u3, users u4, " . self::$tablename . " g
                WHERE u1.uid = g.playerOne
                AND u2.uid = g.playerTwo
                AND u3.uid = g.playerThree
                AND u4.uid = g.playerFour
                AND (
                    g.playerOne = ?
                    OR
                    g.playerTwo = ?
                    OR
                    g.playerThree = ?
                    OR
                    g.playerFour = ?
                )
                ORDER BY g.created DESC";
            $stmt = self::$connection->prepare($query);
            $stmt->bind_param("iiii", $uid, $uid, $uid, $uid);
            $stmt->execute();
            $res = $stmt->get_result();
            echo json_encode($res->fetch_all(MYSQLI_ASSOC));
        }
    }
    Game::Init();
?>
