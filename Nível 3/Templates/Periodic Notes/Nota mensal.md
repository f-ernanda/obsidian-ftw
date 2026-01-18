# Milestones
- 
# Roda da vida
```chart
type: polarArea
labels: [Qualidade de vida, Pessoal, Profissional, Relacionamentos] 
series:
  - title:
    data: [0,0,0,0] 
width: 70%
labelColors: true
beginAtZero: true
rMax: 10
legendPosition: right
```
# Área de foco
- 
# Divisão semanal
<%*
const currentYear = tp.date.now("YYYY");
const currentMonth = tp.date.now("M") - 1;

const startOfMonth = moment([currentYear, currentMonth, 1]);
const endOfMonth = startOfMonth.clone().endOf('month');
let weeks = new Set();

for (let weekStart = startOfMonth.clone().startOf('week'); weekStart.isBefore(endOfMonth); weekStart.add(1, 'week')) {
  const weekEnd = weekStart.clone().endOf('week');
  if (weekEnd.isSameOrAfter(startOfMonth) && weekStart.isSameOrBefore(endOfMonth)) {
    weeks.add(weekEnd.isoWeek());
  }
}

weeks.add(endOfMonth.isoWeek());
weeks = Array.from(weeks);

weeks.forEach(week => {
  tR += `## Semana ${String(week).padStart(2, '0')}\n- [ ] \n`;
});
%>
# Checklist
<%*
const lastDayOfMonth = moment().endOf('month').format("YYYY-MM-DD");
tR += `- [ ] Emitir nota para a CodeBrain (@${lastDayOfMonth})`;
%>