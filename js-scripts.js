const editorElement = document.getElementById('editor');

iink.register(editorElement, {
  recognitionParams: {
    type: 'TEXT',
    server: {
      applicationKey: appKey,
      hmacKey: hKey
    }
  }
});