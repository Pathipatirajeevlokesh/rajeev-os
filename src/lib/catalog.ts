import type { ProjectFilter, ProjectRecord } from '@/data/projects'
import type { SkillCategory } from '@/data/skills'

export function filterProjects(
  records: ProjectRecord[],
  activeFilter: ProjectFilter | 'all',
  searchTerm: string,
) {
  const query = searchTerm.trim().toLowerCase()

  return records.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.filters.includes(activeFilter)
    const matchesSearch = !query
      || [project.name, project.category, project.description, ...project.technologies]
        .join(' ')
        .toLowerCase()
        .includes(query)

    return matchesFilter && matchesSearch
  })
}

export function filterSkillCategories(
  categories: SkillCategory[],
  activeCategory: string,
) {
  return activeCategory === 'all'
    ? categories
    : categories.filter((category) => category.id === activeCategory)
}
