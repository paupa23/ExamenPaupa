"use client"

import { useState } from "react"
import { Dropzone } from "@/components/dropzone"
import { Button } from "@/components/ui/button"

export function UploadZone() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-xl border border-dashed border-gray-400 bg-muted/50 p-4">
        <Dropzone
          onDrop={(acceptedFiles: File[]) => {
            console.log("Archivos subidos:", acceptedFiles)
            setFiles(acceptedFiles)
          }}
          // acepta imágenes y PDFs; pon lo que necesites
          accept={{
            "image/*": [],
            "application/pdf": [],
          }}
          maxSize={10 * 1024 * 1024} // 10MB
          multiple
          className="w-full"
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium">Archivos:</p>
          <ul className="list-disc pl-5 text-sm">
            {files.map((f) => (
              <li key={`${f.name}-${f.size}`}>{f.name} — {(f.size / 1024).toFixed(0)} KB</li>
            ))}
          </ul>
          <div className="mt-3">
            <Button variant="secondary" onClick={() => setFiles([])}>
              Limpiar lista
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
