function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
    const jsCode = `<script>${document.getElementById("jsCode").value}<\/script>`;

    const output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
}

function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function generatePreviewLink() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const encodedHtml = base64Encode(htmlCode);
    const encodedCss = base64Encode(cssCode);
    const encodedJs = base64Encode(jsCode);

    const baseUrl = window.location.href.split('?')[0];
    const previewUrl = `${baseUrl}preview.html?html=${encodedHtml}&css=${encodedCss}&js=${encodedJs}`;

    const previewLinkInput = document.getElementById("previewLink");
    previewLinkInput.value = previewUrl;
    previewLinkInput.select();
    document.execCommand("copy");
    alert("Preview link generated and copied to clipboard!");
}
