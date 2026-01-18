# Tarefas agendadas
![[Nota semanal - <% tp.date.now("YYYY-[W]WW") %>#<% moment().locale("pt-br").format("dddd").replace(/^\w/, c => c.toUpperCase()) %>]]
# Tarefas ad hoc
```dataviewjs
const fileDate = dv.current().file.name.match(/\d{4}-\d{2}-\d{2}/)?.[0];

if (!fileDate) {
    dv.paragraph("Essa nota não possui data no título.");
} else {
	const tasks = dv.pages()
    .file.tasks
    .where(task => task.text.includes(`(@${fileDate})`));

	if (tasks.length > 0) {
	    dv.taskList(tasks, true);
	} else {
	    dv.paragraph("Sem tasks para hoje!");
	}
}
```
# Planejamento
- [ ] 
# Checklist
- [ ] Ver planejamento de amanhã 

---
# Rascunhos

<%* tp.user.archive_notes() %>