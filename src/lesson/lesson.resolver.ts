import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'ahash',
      name: 'Physics Class',
      // prettier-ignore
      startDarte: (new Date()).toLocaleDateString(),
      // prettier-ignore
      endDate: (new Date()).toLocaleDateString(),
    };
  }
}
