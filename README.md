## Node.js simple logger

### Usage:

1. Server accepts only json requests, so set `content-type` header to `application/json`
2. send **POST** request with json data to log server

### Example:

Example json data:
```
{
	"stack": "Error: some error\n    at Object.<anonymous> (/home/user/tmp/node-logger/index.js:7:13)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Function.Module.runMain (module.js:682:10)\n    at startup (bootstrap_node.js:191:16)\n    at bootstrap_node.js:613:3",
	"message":"some error"
}
```

CURL:
```
curl -X POST \
  http://localhost:3000/ \
  -H 'content-type: application/json' \
  -d '{
	"stack": "Error: some error\n    at Object.<anonymous> (/home/user/tmp/node-logger/index.js:7:13)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Function.Module.runMain (module.js:682:10)\n    at startup (bootstrap_node.js:191:16)\n    at bootstrap_node.js:613:3",
	"message":"some error"
}'
```