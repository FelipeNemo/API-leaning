//IMPORTANDO AS BIBLIOTECAS

import { Client } from "@notionhq/client"
import { config } from "dotenv"
import {PageProperties} from "./sampleProperties.js";
config()

const pageId = process.env.NOTION_PAGE_ID
const apiKey = process.env.NOTION_API_KEY

const notion = new Client({ auth: apiKey })

/* 
---------------------------------------------------------------------------
*/
//CRIA A PÁGINA
async function Addpage(databaseId, pageProperties) {   
  const newPage = await notion.pages.create({
    parent: { //Pagina pai
      database_id: databaseId,//Id do pai
    },
    properties: pageProperties,//Propriedade da página filha
  })
  console.log(newPage)// print a newPage
}

/* 
---------------------------------------------------------------------------
*/
//PROPRIEDADE DE CADA PÁGINA


/* 
---------------------------------------------------------------------------
*/
//
async function main() {
  if (!databaseId) {
    console.error("ID do banco de dados ausente.");
    return;
  }

  console.log("Adicionando novas pastas....");

  for (let i = 0; i<PageProperties.length; i++ ) {
    await Addpage(databaseId,PageProperties[i]);
  }
}
main();

