cmake_minimum_required(VERSION 3.8)

set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "fearth-cocos-gdk"  CACHE STRING "Project Name")

project(${APP_NAME} CXX)

set(CC_PROJECT_DIR ${CMAKE_CURRENT_LIST_DIR})
set(CC_UI_RESOURCES)
set(CC_PROJ_SOURCES)
set(CC_ASSET_FILES)
set(CC_COMMON_SOURCES)
set(CC_ALL_SOURCES)

include(${CC_PROJECT_DIR}/../common/CMakeLists.txt)
set(EXECUTABLE_NAME ${APP_NAME}-mobile)

cc_ios_before_target(${EXECUTABLE_NAME})
add_executable(${EXECUTABLE_NAME} ${CC_ALL_SOURCES})
cc_ios_after_target(${EXECUTABLE_NAME})

################################## GDK ##################################

set (GDK_NAME fearthgdk)

file(GLOB_RECURSE GDK_SRC 
    "${CMAKE_CURRENT_LIST_DIR}/${GDK_NAME}/src/*.h"
    "${CMAKE_CURRENT_LIST_DIR}/${GDK_NAME}/src/*.m"
    "${CMAKE_CURRENT_LIST_DIR}/${GDK_NAME}/src/*.mm"
)

target_sources(${EXECUTABLE_NAME} PRIVATE ${GDK_SRC})

file(GLOB EMBEDDED_FRAMEWORKS "${CMAKE_CURRENT_LIST_DIR}/${GDK_NAME}/frameworks/*.framework")

target_link_libraries(${EXECUTABLE_NAME} ${EMBEDDED_FRAMEWORKS})

set_target_properties( ${EXECUTABLE_NAME} PROPERTIES
    XCODE_EMBED_FRAMEWORKS "${EMBEDDED_FRAMEWORKS}"
    XCODE_EMBED_FRAMEWORKS_CODE_SIGN_ON_COPY "YES" # Make sure Framework must be signed by the same developer as the binary
    XCODE_ATTRIBUTE_LD_RUNPATH_SEARCH_PATHS "@executable_path/Frameworks" #  Set framework search path to (App bundle)/Frameworks so the application can use its embedded frameworks
)

########################################################################
