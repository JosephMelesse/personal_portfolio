const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function formatDateForHeader(d) {
  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
    year: 'numeric',
  }).formatToParts(d);

  const map = {};
  parts.forEach((p) => {
    if (p.type !== 'literal') map[p.type] = p.value;
  });

  // Space-pad single-digit day to match the example (e.g. "Jun  6")
  const dayNum = d.getDate();
  const dayStr = dayNum < 10 ? ` ${dayNum}` : String(dayNum);

  const weekday = map.weekday || '';
  const month = map.month || '';
  const hour = map.hour || '';
  const minute = map.minute || '';
  const second = map.second || '';
  const ampm = map.dayPeriod || '';
  const tz = map.timeZoneName || '';
  const year = map.year || '';

  return `${weekday} ${month} ${dayStr} ${hour}:${minute}:${second} ${ampm} ${tz} ${year}`;
}

app.get('/', (req, res) => {
  const now = new Date();
  res.send(formatDateForHeader(now));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));