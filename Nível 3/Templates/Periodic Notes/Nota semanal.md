# Essa semana
<%*
const currentYear = tp.date.now("YYYY");
const currentWeek = tp.date.now("ww");

const startOfWeek = moment().year(currentYear).week(currentWeek).startOf('week');
const endOfWeek = moment().year(currentYear).week(currentWeek).endOf('week');

const startMonth = startOfWeek.month();
const endMonth = endOfWeek.month();
const startMonthName = moment().month(startMonth).format("MMMM");
const endMonthName = moment().month(endMonth).format("MMMM");

let weeklyLinks = startMonth === endMonth
  ? `![[Nota mensal - ${currentYear}-${String(startMonth + 1).padStart(2, '0')}#Semana ${currentWeek}]]`
  : `![[Nota mensal - ${currentYear}-${String(startMonth + 1).padStart(2, '0')}#Semana ${currentWeek}]]\n![[Nota mensal - ${endMonth === 0 ? +currentYear + 1 : currentYear}-${String(endMonth + 1).padStart(2, '0')}#Semana ${currentWeek}]]`;

tR += weeklyLinks;
%>
# Divisão diária
## Domingo
- **Tarefas:**
	- [ ] 
## Segunda-feira
- **Tarefas:**
	- [ ] 
- **Reuniões:**
	- [ ] 
## Terça-feira
- **Tarefas:**
	- [ ] 
- **Reuniões:**
	- [ ] 
## Quarta-feira
- **Tarefas:**
	- [ ] 
- **Reuniões:**
	- [ ] 
## Quinta-feira
- **Tarefas:**
	- [ ] 
- **Reuniões:**
	- [ ] 
## Sexta-feira
- **Tarefas:**
	- [ ] 
- **Reuniões:**
	- [ ] 
## Sábado
- **Tarefas:**
	- [ ] 
# Checklist
- [ ] Checar se essa semana tem Code Talks :D