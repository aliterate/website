#!/bin/bash

mkdocs build
aws s3 sync site/ s3://aliterate-web
