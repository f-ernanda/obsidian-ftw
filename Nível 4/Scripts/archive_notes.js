async function archive_notes() {
  moment.locale('pt-br')

  const targetDate = moment().subtract(1, 'day')
  const formattedDate = targetDate.format('YYYY-MM-DD')
  const month = targetDate.format('MM')
  const year = targetDate.format('YYYY')

  const sourcePath = `Agenda`
  const destinationPath = `Arquivo/${year}/Mês ${month}`

  const sourceFolder = app.vault.getAbstractFileByPath(sourcePath)
  let destinationFolder = app.vault.getAbstractFileByPath(destinationPath)

  if (!sourceFolder || !sourceFolder.children) {
    console.warn(`Pasta de origem não encontrada: ${sourcePath}`)
    return
  }

  if (!destinationFolder) {
    await app.vault.createFolder(destinationPath)
  }

  const targetFile = sourceFolder.children.find(file => {
    const fileName = file.name
    return (
      fileName.startsWith(`Nota diária -`) &&
      fileName.includes(formattedDate) &&
      fileName.endsWith('.md')
    )
  })

  if (!targetFile) {
    console.warn(`Nenhuma nota encontrada para ${formattedDate}`)
    return
  }

  const newFilePath = `${destinationPath}/${targetFile.name}`
  await app.fileManager.renameFile(targetFile, newFilePath)

  console.log(`Nota diária ${formattedDate} arquivada em ${destinationPath}`)
}

module.exports = archive_notes
