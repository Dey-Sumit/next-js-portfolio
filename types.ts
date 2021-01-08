export interface skill {
   Icon: any
   name: string
   level: string
}

export interface project {
   id: number
   name: string
   image_path: any
   deployed_url: string
   github_url: string
   category: string[]
}

export interface expertise {
   Icon: any
   title: string
   about: string
}
