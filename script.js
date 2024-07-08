document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'ZOULSv1zip.zip';
    link.download = 'ZOULSv1zip.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});