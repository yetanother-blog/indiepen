# Contributing

## Generate font for embed

For the embed, we use a subset of the font Inter. Use the following commands to re-generate the font:

```sh
# Temporarily download the font
npm i @fontsource/inter

# Install dependencies for glyphhanger
pip install fonttools
pip install brotli

# Run glyphhanger to generate the font
npx glyphhanger --formats=woff2 --whitelist="INDEPCSJHTMLRU" --subset="node_modules/@fontsource/inter/files/inter-latin-900-normal.woff2" --css

# Move the font file to the embed folder
cp node_modules/@fontsource/inter/files/inter-latin-900-normal-subset.woff2 src/embed/font
```

The important part is, that we greenlisted the following characters: `INDEPCSJHTMLRU`. If we need to support more characters, then we need to update the list.
