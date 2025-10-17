// src/App.tsx
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { AppleHelloEffect } from "@/components/apple-hello-effect"
import { UploadZone } from "@/components/upload-zone"
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/dropzone';
import { useState } from 'react';

export default function App() {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Grid superior: 3 recuadros */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* 1) Apple Hello (izquierda) */}
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
              <AppleHelloEffect />
            </div>

            {/* 2) Recuadro vacío (centro) */}
            <div className="bg-muted/50 aspect-video rounded-xl" />

            {/* 3) Upload (derecha) */}
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center p-4">
              {/* Lo envolvemos para que quede como una tarjeta con borde discontínuo */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-sm">
                <Dropzone
      accept={{ 'image/*': [] }}
      maxFiles={10}
      maxSize={1024 * 1024 * 10}
      minSize={1024}
      onDrop={handleDrop}
      onError={console.error}
      src={files}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque grande inferior vacío */}
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
