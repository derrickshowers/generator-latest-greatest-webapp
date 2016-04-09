# generator-latest-greatest-webapp

## What is it?

Ever wish you could just quickly setup a new webapp, but with all the goodies like ES2015, SCSS, and all the other fun stuff? Well, now it's as easy as installing this module and saying "YO BRO!" (without the bro...)

## Installing

    npm install -g generator-latest-greatest-webapp

Seriously, that's it.

## Create your app

    mkdir <your-app-name>
    cd <your-app-name>
    yo latest-greatest-webapp

## Development

Generator uses [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) to serve everything at [localhost:8080](http://localhost:8080). Just run the following command to get started:

    npm run dev

## Build and deploy

    npm run build

After things are done, just move whatever is in your `dist/` directory to your server.

## FAQs

**Why doesn't live reload seem to work?**

Live reload does work, but only for JS changes. Webpack Dev Server doesn't watch static files (HTML, SCSS, etc.). Damn, what a bummer, but don't worry, there's still hope. The `npm run dev` command is setup to watch your markup and css changes, so everything still gets moved to the `dist/` directory (which is what is served with Webpack Dev Server), but you just have to manually refresh the page. Sorry, life is hard.

## License

MIT
