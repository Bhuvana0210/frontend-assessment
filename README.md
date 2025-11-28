## Frontend Assignment – React + Tailwind CSS

## 1. Introduction

I structured the code using a feature-based and responsibility-separated approach.
Filters, table, and profile view are modular.
Heavy logic such as filtering, sorting, and bulk updates lives inside custom hooks and utilities.
The UI remains responsive with virtualization and memoization.

## 2. Tech Stack

React (CRA) – component-based UI development

Tailwind CSS v3 – utility-first styling

React Icons – scalable vector icons

JavaScript (ES6+)

## 3. Folder Structure
src/
│
├── assets/
│   └── icons/              # Optional – icons for UI
│
├── data/
│   ├── candidates.js       # Mock dataset (500–1000 entries)
│   └── options.js          # Dropdown values: stages, companies, jobs
│
├── hooks/
│   ├── useFilters.js       # Handle filter logic
│   ├── useSort.js          # Handle sorting logic
│   ├── useVirtualTable.js  # Virtual scroll (react-window)
│   └── useBulkActions.js   # Bulk actions update logic
│
├── components/
│   │
│   ├── filters/
│   │   ├── FilterPanel.jsx       # Main filter panel layout
│   │   ├── FilterGroup.jsx       # Reusable group container
│   │   ├── MultiSelect.jsx       # Job multiselect
│   │   └── SalaryRange.jsx       # Range slider/input
│   │
│   ├── table/
│   │   ├── DataTable.jsx         # Parent table component
│   │   ├── TableHeader.jsx       # Sortable headers
│   │   ├── TableRow.jsx          # One row renderer
│   │   ├── InlineEditCell.jsx    # Supports inline edit
│   │   ├── MultiItemCell.jsx     # View More / View Less
│   │   ├── RowCheckbox.jsx       # Row selection
│   │   ├── BulkActionsBar.jsx    # Bulk actions toolbar
│   │   └── FooterInfo.jsx        # Showing X–Y of Z
│   │
│   ├── profile/
│   │   └── ProfileModal.jsx      # Full candidate view
│   │
│   └── common/
│       ├── Button.jsx
│       ├── Checkbox.jsx
│       ├── Modal.jsx
│       └── Select.jsx
│
├── utils/
│   ├── filterUtils.js            # filter functions
│   ├── sortUtils.js              # sorting logic
│   ├── formatUtils.js            # date, salary format
│   └── generateMock.js           # optional faker-based mock data generator
│
├── styles/
│   └── main.css                  # global CSS (or Tailwind setup)
│
├── App.jsx                       # main page layout
└── main.jsx                      # entry point


## 4. Approach

Followed component-based structure for modularity

Divided UI into pages, sections, and reusable components

Used Tailwind CSS for fast, consistent styling

Implemented responsive layouts using flex, grid, and breakpoints

Integrated React Icons for UI visuals

Ensured clean, readable, and maintainable code

## 5. How to Run the Project
npm install
npm start


The project will run on http://localhost:3000/
.

## 6. (Optional but recommended) Key Features

Responsive layout

Clean component structure

Utility-based styling

Easy to extend for additional features