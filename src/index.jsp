<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="author" content="Dev Ttangkong">
    <meta http-equiv="Email" content ="r.ttankkeo112@gmail.com">
    <meta name="description" content="A global platform for novel, comics, webtoons, and animation.">
    <meta name="keywords" content="novel, comics, webtoons, animation">
    <title>Preact with Typescript</title>
</head>
<body>
    <% if (!Boolean(process.env.IS_DEBUG)) { %>
        <style><%= compilation.assets["main.css"].source() %></style>
        <script><%= compilation.assets["main.js"].source() %></script>
    <% } %>
</body>
</html>