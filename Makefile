install:
	npm install

dev:
	npm run dev

storybook:
	npm run storybook

storybook-build:
	npm run storybook-build

test:
	npm run test

.PHONY: lint-fix
lint-fix:
	npx eslint "src/**/*.{ts,tsx}" --fix