import { rollup } from "rollup"
import commonJS from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"

let i = 0

const plugins = [
	json(),
	nodeResolve(),
	commonJS(),
	{
		transform() {
			if (i++)
				throw new Error(`:(`)
		}
	}
]

const bundle = await rollup({
	input: "./index.js",
	plugins
})

console.log((await bundle.generate({})).output[0].code)
