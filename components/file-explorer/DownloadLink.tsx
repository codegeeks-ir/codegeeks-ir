import DownloadIcon from "public/icones/download.svg";

const DownloadLink = ({ repoName }: { repoName: string }) => {
  const repoLink = `https://github.com/codegeeks-ir/${repoName}`;
  const download = `${repoLink}/archive/refs/heads/main.zip`;
  return (
    <a className="grow-0" href={download}>
      <DownloadIcon className="w-6 fill-slate-300" />
    </a>
  );
};

export default DownloadLink;
