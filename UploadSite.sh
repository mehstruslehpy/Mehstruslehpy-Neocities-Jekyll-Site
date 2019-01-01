#!/bin/bash
find _site -type f -exec python upload-sitefile.py {} {} \;
