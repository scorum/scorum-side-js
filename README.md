# Scorum-side.js
Scorum-side.js -- JavaScript API for Scorum sidechain.

## Browser
```html
<script src="./scorum-side.min.js"></script>
<script>
    scorum.api.setOptions({ url: 'https://blog-api-dev.scorum.com/' });
    scorum.config.set('address_prefix', 'SCR');
    scorum.config.set('chain_id', 'd3c1f19a4947c296446583f988c43fd1a83818fabaf3454a0020198cb361ebd2');

    scorum.api.getProfileWithAsync({
      account: 'kristie'
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
</script>
```

## Install
```
$ yarn add @scorum/scorum-side-js
```
## Examples
* The client side examples can be found under `examples/client` folder.
* The server side examples can be found under `examples/server` folder.

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list.

## Issues
When you find issues, please report them!

## License
MIT
