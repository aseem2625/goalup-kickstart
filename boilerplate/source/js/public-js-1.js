// Imports entire files as module
import 'helper-1'; // Base directory resolution to '.helpers/'

// Use ES modules for some .JS if you want tree shaking for that file.
import defaultBear, { smallBear } from 'helper-2';