function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
    const jsCode = `<script>${document.getElementById("jsCode").value}<\/script>`;

    const output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
}

function generatePreviewLink() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const encodedHtml = encodeURIComponent(htmlCode);
    const encodedCss = encodeURIComponent(cssCode);
    const encodedJs = encodeURIComponent(jsCode);

    const baseUrl = window.location.href.split('?')[0];
    const previewLink = `${baseUrl}preview.html?html=${encodedHtml}&css=${encodedCss}&js=${encodedJs}`;

    const previewLinkInput = document.getElementById("previewLink");
    previewLinkInput.value = previewLink;
    previewLinkInput.select();
    document.execCommand("copy");
    alert("Preview link generated and copied to clipboard!");
}
