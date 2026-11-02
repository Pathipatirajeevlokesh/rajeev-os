import { Search } from 'lucide-react'
import type { ProjectFilter } from '@/data/projects'

type ProjectFiltersProps = {
  activeFilter: ProjectFilter | 'all'
  searchTerm: string
  onFilterChange: (filter: ProjectFilter | 'all') => void
  onSearchChange: (term: string) => void
}

const filters: Array<{ label: string; value: ProjectFilter | 'all' }> = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI Systems', value: 'ai' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Intelligent Automation', value: 'automation' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
]

export function ProjectFilters({
  activeFilter,
  searchTerm,
  onFilterChange,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      <div className="project-filter-tabs" role="tablist" aria-label="Filter projects by category">
        {filters.map((filter) => (
          <button
            type="button"
            className={activeFilter === filter.value ? 'project-filter-tab project-filter-tab--active' : 'project-filter-tab'}
            role="tab"
            aria-selected={activeFilter === filter.value}
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <label className="project-search">
        <Search size={15} aria-hidden="true" />
        <span className="sr-only">Search projects</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search archive"
        />
      </label>
    </div>
  )
}
