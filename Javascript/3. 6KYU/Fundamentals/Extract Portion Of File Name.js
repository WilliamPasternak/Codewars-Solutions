extract portion of file name
You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      const startFileName = dirtyFileName.indexOf('_') + 1
      const endFileName = dirtyFileName.lastIndexOf('.')
      return dirtyFileName.slice(startFileName,endFileName)   
    }
}