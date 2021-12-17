#!/usr/bin/env zx

const wordDir = path.join(__dirname, '..')
cd(wordDir)

let openapiGenerator = 'openapi-generator'
if (await $`type ${openapiGenerator}`.exitCode !== 0) {
  openapiGenerator = 'openapi-generator-cli'
}

const openapi = 'openapi.yaml'
const project = 'demo'
const outDir = `${project}-axios`

const additionalProperties = [
  `npmName=${project}`,
  'supportsES6=true',
  'withSeparateModelsAndApi=true',
  'withInterfaces=true'
]

$`${openapiGenerator} generate \
  -i ${openapi} \
  -g typescript-axios \
  -o ${outDir} \
  --model-package 'model' \
  --api-package 'api' \
  -t typescript-axios \
  --additional-properties ${additionalProperties.join(',')}
`
