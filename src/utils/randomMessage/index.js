import messages from '../../static/messages';

export default () => messages[Math.floor(Math.random() * messages.length)];
