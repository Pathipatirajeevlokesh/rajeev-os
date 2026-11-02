type SkillFilterProps = {
  categories: Array<{ id: string; label: string }>
  activeCategory: string
  onChange: (category: string) => void
}

export function SkillFilter({ categories, activeCategory, onChange }: SkillFilterProps) {
  return (
    <div className="skill-filter" role="tablist" aria-label="Filter skill categories">
      <button
        type="button"
        className={activeCategory === 'all' ? 'skill-filter__item skill-filter__item--active' : 'skill-filter__item'}
        role="tab"
        aria-selected={activeCategory === 'all'}
        onClick={() => onChange('all')}
      >
        All systems
      </button>
      {categories.map((category) => (
        <button
          type="button"
          className={activeCategory === category.id ? 'skill-filter__item skill-filter__item--active' : 'skill-filter__item'}
          role="tab"
          aria-selected={activeCategory === category.id}
          key={category.id}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
