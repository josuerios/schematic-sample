# Schematic Sample

Schematic sample project that creates an Angular app based on the Angular schematic, that reproduces steps from https://github.com/angular/devkit/issues/447 .

## Install

```bash
$ git clone https://github.com/josuerios/schematic-sample.git
$ npm install
$ npm run build
$ npm install -g #install this schematic globally
```

## Usage

To run the schematic use `@angular-devkit/schematics-cli@0.4.0`

```bash
$ schematics schematic-sample:application --name appName --directory myDir
```
