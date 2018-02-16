<HTML>
<HEAD>
    <TITLE>Tестове завдання</TITLE>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="test.css">
    <script src="jquery-1.10.2.js"></script>
    <script src="test.js"></script>
    <script>
        $(document).ready(function () {
            init();
        });
    </script>
</HEAD>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: Kupchak
 * Date: 15.02.2018
 * Time: 17:12
 */
$row_count = 10;
$cool_count = 10;
print "<div>";
print "<table id='test_table'>";
for ($r = 1; $r <= $row_count; $r++) {
    print "<tr>";
    for ($c = 1; $c <= $row_count; $c++) {
        print "<td class=dis id='$r-$c'></td>";
    }
    print "</tr>";
}
print "</table>";
print "<button type=button id=start>Старт!!!</button>";
print "<button type=button id=next_step>Покроково</button>";
print "</div>";
?>
</body>
</html>


