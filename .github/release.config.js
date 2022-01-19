module.exports = {
  "branches": [
    { name: "main" },
    { name: "x.x.x" },
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
  "tagFormat": "${version}",
};
