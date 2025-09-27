export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">Marcus Chen</h3>
            <p className="text-sm text-muted-foreground">Architect & Design Consultant</p>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
            <p>&copy; 2025 Marcus Chen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
