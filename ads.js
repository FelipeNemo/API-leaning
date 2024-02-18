// Importa o cliente da API do Notion.
const { Client } = require("@notionhq/client");


// Inicializa o cliente da API com o token de integração.
const notion = new Client({
  auth: process.env["secret_omJpoiedYBfxCSdesu685u1qB6emnHyWkJiLUk6cgSf"], // Certifique-se de definir sua chave de API do Notion como uma variável de ambiente.
});

// Substitua pelo ID do seu banco de dados.
const databaseId = "28d6a79ec1d648d9a8a94f97cbf23b24";

// Função assíncrona para adicionar uma página ao banco de dados.
async function addPageToDatabase() {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // Aqui você define as propriedades da sua página conforme o seu banco de dados.
        // Este é um exemplo de como definir o título. O nome da propriedade deve corresponder ao nome no seu banco de dados.
        "Name": {
          title: [
            {
              text: {
                content: "Título da nova página",
              },
            },
          ],
        },
        // Adicione outras propriedades conforme necessário.
      },
      // Você também pode adicionar conteúdo à página usando o campo 'children' se necessário.
    });

    console.log("Página adicionada com sucesso!", response);
  } catch (error) {
    console.error("Erro ao adicionar página ao banco de dados", error);
  }
}

// Chama a função para adicionar a página.
addPageToDatabase();
