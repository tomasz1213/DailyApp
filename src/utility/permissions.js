import Fitness from '@ovalmoney/react-native-fitness';
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const permissions = [
  {
    kind: Fitness.PermissionKinds.Steps,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.Steps,
    access: Fitness.PermissionAccesses.Write,
  },
  {
    kind: Fitness.PermissionKinds.Distances,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.Distances,
    access: Fitness.PermissionAccesses.Write,
  },
  {
    kind: Fitness.PermissionKinds.Calories,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.Calories,
    access: Fitness.PermissionAccesses.Write,
  },
  {
    kind: Fitness.PermissionKinds.HeartRate,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.HeartRate,
    access: Fitness.PermissionAccesses.Write,
  },
  {
    kind: Fitness.PermissionKinds.Activity,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.Activity,
    access: Fitness.PermissionAccesses.Write,
  },
  {
    kind: Fitness.PermissionKinds.SleepAnalysis,
    access: Fitness.PermissionAccesses.Read,
  },
  {
    kind: Fitness.PermissionKinds.SleepAnalysis,
    access: Fitness.PermissionAccesses.Write,
  },
];

export const requestPermission = async () => {
  check(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION).then(result => {
    switch (result) {
      case RESULTS.DENIED:
        request(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION).then(result => {});
        break;
    }
  });
  // check(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
  //   switch (result) {
  //     case RESULTS.DENIED:
  //       request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {});
  //       break;
  //   }
  // });
};
