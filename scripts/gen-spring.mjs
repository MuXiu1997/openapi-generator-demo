#!/usr/bin/env zx

const wordDir = path.join(__dirname, '..')
cd(wordDir)

let openapiGenerator = 'openapi-generator'
if (await $`type ${openapiGenerator}`.exitCode !== 0) {
  openapiGenerator = 'openapi-generator-cli'
}

const openapi = 'openapi.yaml'
const project = 'demo'
const group = 'cn.baizhiedu.demo'
const outDir = `${project}-spring`

const additionalProperties = [
  `apiPackage=${group}.${project}.api`,
  `artifactId=${project}`,
  `basePackage=${group}.${project}`,
  `configPackage=${group}.${project}.configuration`,
  `delegatePattern=true`,
  `disallowAdditionalPropertiesIfNotPresent=false`,
  `groupId=${group}`,
  `licenseName=MIT`,
  `modelPackage=${group}.${project}.model`
]

$`${openapiGenerator} generate \
  -i ${openapi} \
  -g spring \
  -o ${outDir} \
  --additional-properties ${additionalProperties.join(',')}
`
