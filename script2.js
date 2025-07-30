const scrollContent = document.getElementById('scroll-content');
const nowHeader = document.getElementById('now-header');

function renderRows() {
    for (let i = 0; i < 2; i++) { // Duplicate for seamless scroll
        data.forEach(channel => {
                    const row = document.createElement('div');
                    row.className = 'channel-row';
                    row.innerHTML = `
        <div>${channel.number} ${channel.channel}</div>
        ${channel.schedule.map(s => `<div>${s.title}</div>`).join('')}
      `;
      scrollContent.appendChild(row);
    });
  }
}

function updateHeader() {
  const nowShow = data[0].schedule[0].title;
  const nowChannel = data[0].channel;
  nowHeader.textContent = `NOW: ${nowChannel} - ${nowShow}`;
}

renderRows();
updateHeader();