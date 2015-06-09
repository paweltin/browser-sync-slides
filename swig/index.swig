<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1024" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>{{ title }}</title>

    <link href="http://fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic" rel="stylesheet" />
    <link href="{{ impressJsDir }}css/impress-demo.css" rel="stylesheet" />
</head>
<body class="impress-not-supported">
    <div id="impress">
        <div id="one" class="step" data-x="0" data-y="0">
            <h1>Improving RWD and cross-browser compatibility testing</h1>
            <h2>Improving Mirumee's frontend quality</h2>
        </div>

        <div id="dwa" class="step" data-x="0" data-y="100" data-rotate-x="-90">
            Rozwiązanie: BrowserSync
        </div>

        <div id="trzy" class="step" data-x="0" data-y="-100" data-rotate-x="-180">
            Ficzery: mnóstwo
        </div>

        <div id="cztery" class="step" data-x="0" data-y="300" data-rotate-x="-270">
            Co dalej: CSS regression testing
        </div>
    </div>

    <script src="{{ impressJsDir }}js/impress.js"></script>
    <script>impress().init();</script>
</body>
</html>
