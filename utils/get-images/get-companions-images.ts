import fs from "fs";
import { readdirSync } from "fs";
import axios from "axios";
import path from "path";
import config from "../../data/config";
import { Format } from "../schema/data";

const saveImage = async (url: string, path: string) => {
  try {
    (
      await axios({
        url,
        responseType: "stream",
      })
    ).data.pipe(fs.createWriteStream(path));
  } catch (error) {
    console.log(
      "Error on downloading companion image: " + (error as Error).message
    );
  }
};

const getCompanionsImages = async () => {
  const companionsDirectory = path.join(
    process.cwd(),
    `${config.source.collections}/${Format.Companions}`
  );
  const files = readdirSync(companionsDirectory, {
    withFileTypes: true,
  }).filter((element) => element.isFile() && element.name != "README.md");
  const companions = await Promise.all(files.map((file) => file.name.split(".")[0]));
  const savePath = path.join(process.cwd(), "public/images");
  await Promise.all(
    companions.map(
      async (item) =>
        await saveImage(
          `https://github.com/${item}.png`,
          `${savePath}/${item}.png`
        )
    )
  );
};

getCompanionsImages();
