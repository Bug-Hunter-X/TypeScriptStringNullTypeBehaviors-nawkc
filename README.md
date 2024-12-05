# Unexpected Behavior with 'string | null' Type in TypeScript

This repository demonstrates a common, yet subtle, issue in TypeScript when working with the `string | null` type.  The problem arises from how TypeScript handles the implicit `undefined` value, which isn't directly addressed by the `string | null` type.

The code in `bug.ts` shows a function that attempts to handle `null` values gracefully but unexpectedly handles `undefined` values differently.

The solution in `bugSolution.ts` offers multiple ways to resolve this behavior and handle undefined values explicitly.

This is a frequent source of unexpected runtime errors and demonstrates why clear type handling is crucial in TypeScript.