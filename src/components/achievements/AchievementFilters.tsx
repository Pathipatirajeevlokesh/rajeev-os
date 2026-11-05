import type { AchievementCategory } from '@/data/achievements'

type AchievementFiltersProps = {
  activeCategory: AchievementCategory | 'all'
  onChange: (category: AchievementCategory | 'all') => void
}

const filters: Array<{ label: string; value: AchievementCategory | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'Competitions', value: 'competitions' },
  { label: 'Research', value: 'research' },
  { label: 'Experience', value: 'experience' },
  { label: 'Certifications', value: 'certifications' },
]

export function AchievementFilters({ activeCategory, onChange }: AchievementFiltersProps) {
  return (
    <div className="achievement-filters" role="tablist" aria-label="Filter achievements by category">
      {filters.map((filter) => (
        <button
          type="button"
          className={activeCategory === filter.value ? 'achievement-filter achievement-filter--active' : 'achievement-filter'}
          role="tab"
          aria-selected={activeCategory === filter.value}
          key={filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
