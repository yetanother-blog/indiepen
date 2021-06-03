const fetch = require('node-fetch');

const SLACK_CHANNEL = 'C012K6XJEH1';

const sendSlackMessage = async ({ text, attachments = [], blocks = [] }) => {
  return fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_DEPLOYMENT_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL,
      text,
      attachments,
      blocks,
    }),
  });
};

const onSuccess = async ({ utils }) => {
  const commits = await Promise.all(
    utils.git.commits.map(async (commit) => {
      const message = await utils.run.command(
        `git show --pretty=format:%s -s ${commit.sha}`
      );

      return {
        message: message.stdout,
        sha1: commit.sha.substring(0, 7),
        link: `${process.env.REPOSITORY_URL}/commit/${commit.sha}`,
        committer: commit.committer.name,
      };
    })
  );

  const attachments = commits.map((commit) => ({
    color: '#36a64f',
    text: `${commit.message} by ${commit.committer} (<${commit.link}|${commit.sha1}>)`,
  }));

  await sendSlackMessage({
    text: '*Whoop Whoop new release for indiepen.tech! 🎉*',
    attachments,
  });
};

const onError = async () => {
  await sendSlackMessage({
    text: '🚨🚨🚨 *Deployment failed for indiepen.tech!* 🚨🚨🚨',
    blocks: [
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: '🚨🚨🚨 *Deployment failed for indiepen.tech!* 🚨🚨🚨',
          },
        ],
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View logs',
            },
            url: `https://app.netlify.com/sites/indiepen/deploys/${process.env.DEPLOY_ID}`,
          },
        ],
      },
    ],
  });
};

module.exports = () => {
  if (process.env.CONTEXT !== 'production') {
    return {};
  }

  return { onSuccess, onError };
};
