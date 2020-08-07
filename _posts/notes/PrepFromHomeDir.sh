#!/bin/sh
rm *.md *.txt
cp ~/LogicNotes/* .
./PrefixDate.sh
./AppendFrontMatter.sh
