import { useCallback } from "react";
import { Badge, Card, Stack, } from 'UI';
import PropTypes from 'prop-types';

export const JobPosition = ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddFilter,
}) => {
  const badges = [].concat(role, level, ...languages, ...tools);
  const badgeOnClick = useCallback((filter) => {
    handleAddFilter(filter);
  }, [])

  return (
    <Card isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          <img
            className='job-position-avatar'
            src={logo}
            alt={company}
          />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className='job-position-title'>
              {position}
            </h2>
            <Stack>
              <div className='job-position-meta'>
                {postedAt}
              </div>
              <div className='job-position-meta'>
                {contract}
              </div>
              <div className='job-position-meta'>
                {location}
              </div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map(item => (
            <Badge
              key={ item }
              children={ item }
              onClick={ () => badgeOnClick(item) }
            />
          ))}
        </Stack>
      </div>
    </Card>
  )
}

JobPosition.propTypes = {
  id: PropTypes.number,
  company: PropTypes.string,
  logo: PropTypes.string,
  new: PropTypes.bool,
  featured: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  level: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.arrayOf(PropTypes.string),
  handleAddFilter: PropTypes.func,
};