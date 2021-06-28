
  import { s3Client } from "../services/S3Client";
  import {
    //   GetObjectCommand, // busca arquivo
    PutObjectCommand // salva um unico arquivo
    //   ListObjectsCommand // lista arquivos
  } from "@aws-sdk/client-s3";
  import AWS, { S3 } from "aws-sdk";
  async bucket(request: Request, response: Response) {
    AWS.config.getCredentials(function (err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log(S3.ManagedUpload);
        // console.log( AWS.);
      }
    });
    const params = {
      Bucket: "tatakae", // The name of the bucket. For example, 'sample_bucket_101'.
      Key: "[Erai-raws] Tensura Nikki - Tensei Shitara Slime Datta Ken - 10 [1080p][Multiple Subtitle].mkv.torrent", // nome do arquivo
      Body: "C:/Users/Maciel/Documents/Projetos/tatakae/src/services/data/Anime/[Erai-raws] Tensura Nikki - Tensei Shitara Slime Datta Ken - 10 [1080p][Multiple Subtitle].mkv.torrent/" // conteudo do arquivo
    };
    const res = await s3Client.send(new PutObjectCommand(params));
    response.json(res).status(200);
  }
  import { S3Client } from "@aws-sdk/client-s3";
  const REGION = "sa-east-1";
  const s3Client = new S3Client({ region: REGION });
  export { s3Client };