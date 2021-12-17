#!/usr/bin/env python3
import argparse
import xml.etree.ElementTree as ET

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('pom', type=str)
parser.add_argument('url', type=str)

args = parser.parse_args()

ET.register_namespace('','http://maven.apache.org/POM/4.0.0')
tree = ET.parse(args.pom)
root = tree.getroot()

distributionManagement = ET.Element('distributionManagement')
repository = ET.Element('repository')
_id = ET.Element('id')
_id.text = 'maven'
name = ET.Element('name')
name.text = 'maven'
url = ET.Element('url')
url.text = args.url
repository.extend([_id, name, url])
distributionManagement.append(repository)

root.append(distributionManagement)

tree.write(args.pom)
