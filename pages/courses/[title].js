import PageLayout from 'layouts/PageLayout'

export default function Course({ content, metaData }) {
  return (
    <>
        <Head>
            <link rel="stylesheet" href="~/assets/css/highlight.min.css"/>
            <link rel="stylesheet" href="~/assets/css/vs2015.min.css"/>
        </Head>
        { content }
        <div>
            <h4>منبع</h4>
            <p>شما می تونید منابع رو به صورت تکی یا یکجا دریافت و حتی برای بهبودش مشارکت کنید.</p>
            <a className="btn-primary" id="repoDownloadLink" href="">دریافت کل منبع</a>
            <a className="btn-primary" id="repoReferenceLink" href="">مشارکت</a>
            <div className="h-auto p-2 mt-8" dir="ltr" repoName="{{ site.repo }}">
                <h5 className="file-explorer-header">File Explorer</h5>
                <FileExplorer contents={} />
            </div>
        </div>
    </>
  );
}

Course.getLayout = function getLayout(course) {
    return (
        <PageLayout>
            { course }
        </PageLayout>
    );
}