<%*
	//Alt + C
	const language = await tp.system.prompt('Code language:', 'shell', true);
	const output = `\`\`\`${language}\n${tp.file.cursor()}\n\`\`\`\n`;
	
	tR += output;
-%>